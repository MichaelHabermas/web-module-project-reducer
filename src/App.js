import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import { applyNumber, applyOperator, clearTotal, setMemory, recallMemory, clearMemory } from './actions/index';
import reducer, { initialState } from './reducers/index.js';

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	// const handleAddOne = () => {
	// 	dispatch(addOne());
	// };

	const handleOperation = num => {
		dispatch(applyNumber(num));
	};

	const changeOperator = operator => {
		dispatch(applyOperator(operator));
	};

	const clearDisplay = () => {
		dispatch(clearTotal());
	};

	const updateMemory = () => {
		dispatch(setMemory());
	};

	const recallCurrentMemory = () => {
		dispatch(recallMemory());
	};

	const clearCurrentMemory = () => {
		dispatch(clearMemory());
	};

	return (
		<div className="App">
			<nav className="navbar navbar-dark bg-dark">
				<a className="navbar-brand" href="/">
					<img width="40px" src="./Lambda-Logo-Red.png" alt="Lambda" /> Lambda Reducer Challenge
				</a>
			</nav>

			<div className="container row mt-5">
				<div className="col-md-12 d-flex justify-content-center">
					<form name="Cal">
						<TotalDisplay value={state.total} />
						<div className="row details">
							<span id="operation">
								<b>Operation: </b>
								{state.operation}
							</span>
							<span id="memory">
								<b>Memory: </b>
								{state.memory}
							</span>
						</div>

						<div className="row">
							<CalcButton value={'M+'} onClick={() => updateMemory()} />
							<CalcButton value={'MR'} onClick={() => recallCurrentMemory()} />
							<CalcButton value={'MC'} onClick={() => clearCurrentMemory()} />
						</div>

						<div className="row">
							<CalcButton value={1} onClick={() => handleOperation(1)} />
							<CalcButton value={2} onClick={() => handleOperation(2)} />
							<CalcButton value={3} onClick={() => handleOperation(3)} />
						</div>

						<div className="row">
							<CalcButton value={4} onClick={() => handleOperation(4)} />
							<CalcButton value={5} onClick={() => handleOperation(5)} />
							<CalcButton value={6} onClick={() => handleOperation(6)} />
						</div>

						<div className="row">
							<CalcButton value={7} onClick={() => handleOperation(7)} />
							<CalcButton value={8} onClick={() => handleOperation(8)} />
							<CalcButton value={9} onClick={() => handleOperation(9)} />
						</div>

						<div className="row">
							<CalcButton value={'+'} onClick={() => changeOperator('+')} />
							<CalcButton value={'*'} onClick={() => changeOperator('*')} />
							<CalcButton value={'-'} onClick={() => changeOperator('-')} />
						</div>

						<div className="row ce_button">
							{/* <CalcButton value={'/'} /> */}
							<CalcButton value={'CE'} onClick={() => clearDisplay()} />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default App;
