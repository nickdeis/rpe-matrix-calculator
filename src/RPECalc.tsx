import React, { FocusEventHandler } from "react";
import { VALID_RPE, VALID_REPS, RPE, balanceRPEMatrix } from "./rpe-calc";
import "./RPECalc.css";

type RepHeadersProps = {
  roundTo: number;
  onRoundChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onHelp: () => void;
};
class RepsHeaders extends React.PureComponent<RepHeadersProps> {
  render() {
    return (
      <thead>
        <tr>
          <td
            className="number-of-reps"
            style={{ textAlign: "center" }}
            colSpan={VALID_REPS.length + 1}
          >
            <span className="left-help-button"></span>
            <span onClick={this.props.onHelp} className="help-button"></span>
            <strong className="number-of-reps-span">Number of Reps</strong>
            <span className="round-to-the-nearest" style={{ float: "right" }}>
              Round to the nearest{" "}
              <input
                type="number"
                onChange={this.props.onRoundChange}
                defaultValue={this.props.roundTo}
              />
            </span>
          </td>
        </tr>
        <tr>
          <th className="td-content" key="RPE">
            RPE
          </th>
          {VALID_REPS.map((rep) => (
            <th className="td-content" key={rep}>
              {rep}x
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}
/**
 * From https://github.com/saikocat/colorbrewer/blob/master/index.js
 */
const SPECTRAL11 = [
  "#9e0142",
  "#d53e4f",
  "#f46d43",
  "#fdae61",
  "#fee08b",
  "#ffffbf",
  "#e6f598",
  "#abdda4",
  "#66c2a5",
  "#3288bd",
  "#5e4fa2",
];

function determineSpectralColor(x: number, y: number) {
  const idx = Math.round((x + y) / 2.2);
  return {
    backgroundColor: SPECTRAL11[idx],
    color: idx < 3 || idx > 8 ? "white" : "black",
  };
}

type RPEInputProps = {
  x: number;
  y: number;
  handleChange: (target: HTMLInputElement) => void;
  n: number;
};

class RPEInput extends React.PureComponent<RPEInputProps> {
  node: HTMLInputElement | null = null;
  componentDidUpdate() {
    if (this.node) {
      this.node.value = String(this.props.n);
    }
  }
  onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    this.props.handleChange(target);
  };
  onMouseDown = () => {
    if (this.node) {
      this.node.placeholder = this.node.value;
      this.node.value = "";
    }
  };
  onBlur = () => {
    if (this.node && !this.node.value) {
      this.node.value = String(this.props.n);
    } else if (this.node && this.node.value) {
      this.props.handleChange(this.node);
    }
  };
  render() {
    const { x, y, n } = this.props;
    return (
      <input
        type="number"
        data-x={x}
        data-y={y}
        onMouseDown={this.onMouseDown}
        onKeyDown={this.onKeyDown}
        onBlur={this.onBlur}
        className="weight-input"
        style={{ fontWeight: 700, ...determineSpectralColor(x, y) }}
        defaultValue={n}
        ref={(node) => (this.node = node)}
      />
    );
  }
}

type RPECalcProps = {
  onHelp: () => void;
};

export default class RPECalc extends React.PureComponent<RPECalcProps> {
  state = {
    rpeMatrix: RPE,
    roundTo: 5,
  };
  handleChange = (target: HTMLInputElement) => {
    const x = Number(target.dataset.x);
    const y = Number(target.dataset.y);
    const weight = Number(target.value);
    const rpeMatrix = balanceRPEMatrix(x, y, weight, this.state.roundTo);
    this.setState({ rpeMatrix });
  };
  onRoundChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const roundTo = Number(target.value);
    this.setState({ roundTo });
  };
  render() {
    const matrix = this.state.rpeMatrix.toArray() as number[][];
    return (
      <table className="rpe-calc-table">
        <RepsHeaders
          onHelp={this.props.onHelp}
          roundTo={this.state.roundTo}
          onRoundChange={this.onRoundChange}
        />
        <tbody>
          {matrix.map((row, y) => {
            return (
              <tr className="rpe-calc-row" key={`row-${y}`}>
                <td
                  className="rpe-calc-cell"
                  style={{ textAlign: "center" }}
                  key={VALID_RPE[y]}
                >
                  <span className="td-content rpe-value-cell">
                    {VALID_RPE[y]}
                  </span>
                </td>
                {row.map((n, x) => {
                  return (
                    <td className="rpe-calc-cell" key={`${x},${y}`}>
                      <RPEInput
                        x={x}
                        y={y}
                        n={n}
                        handleChange={this.handleChange}
                      />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td className="reactive-link" colSpan={VALID_REPS.length + 1}>
              <span>
                Percentages and methods based off{" "}
                <a href="https://www.reactivetrainingsystems.com/Home/Main">
                  Reactive Training Systems
                </a>
              </span>
            </td>
          </tr>
        </tfoot>
      </table>
    );
  }
}
