declare module RPECalc {
    interface Storage {
        fetchLiftNames():Promise<Set<string>>;
        addLiftingSet(set:LiftSetInput):Promise<void>;
        fetchAllOfLift(liftName:string):Promise<LiftSet[]>;
        /**
         * Implement later
         * @param uuid 
         */
        removeLiftingSet(uuid:string):Promise<void>;
        /**
         * Implement later
         * @param uuid 
         */
        removeLift(liftName:string):Promise<void>;
        exportAllSets():Promise<LiftSet[]>;
        importSets(sets:LiftSet[]);
        clearAll():Promise<void>;
    }

    interface LiftSetInput {
        reps:number;
        load:number;
        liftName:string;
        rpe:number;
    }

    interface LiftSet extends LiftSetInput {
        uuid:string;
        timestamp:number;
    }
}