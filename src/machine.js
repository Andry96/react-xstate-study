import { Machine } from "xstate";

const lightSwitchMachine = Machine({
  id: "lightSwitch",
  initial: "inactive",
  states: {
    inactive: {
      on: {
        TOGGLE: "active"
      }
    },
    active: {
      on: {
        TOGGLE: "inactive"
      }
    }
  }
});

export { lightSwitchMachine };
