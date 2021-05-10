export const ADD_ONE = 'ADD_ONE';

export const APPLY_NUMBER = 'APPLY_NUMBER';
export const CHANGE_OPERATION = 'CHANGE_OPERATION';
export const CLEAR_TOTAL = 'CLEAR_TOTAL';

export const SET_MEMORY = 'SET_MEMORY';
export const RECALL_MEMORY = 'RECALL_MEMORY';
export const CLEAR_MEMORY = 'CLEAR_MEMORY';

export const addOne = () => {
	return { type: ADD_ONE };
};

export const applyNumber = number => {
	return { type: APPLY_NUMBER, payload: number };
};

export const applyOperator = operator => {
	return { type: CHANGE_OPERATION, payload: operator };
};

export const clearTotal = () => {
	return { type: CLEAR_TOTAL };
};

export const setMemory = () => {
	return { type: SET_MEMORY };
};

export const recallMemory = () => {
	return { type: RECALL_MEMORY };
};

export const clearMemory = () => {
	return { type: CLEAR_MEMORY };
};
