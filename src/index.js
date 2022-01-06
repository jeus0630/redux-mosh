import configureStore from "./store/configureStore";
import {projectAdded} from "./store/projects";

const store = configureStore;
store.dispatch(projectAdded({name : 'Project 1'}));