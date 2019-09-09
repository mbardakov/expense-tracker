import React from 'react';

interface IRootState {
    inputCost: number;
    inputName: string;
    inputDate: Date;
    selectedTags: string[];
    inputNewTag: string;
    expenses: Expense[];
}

interface IRootProps {}

class Root extends React.PureComponent<IRootProps, IRootState> {

    constructor(props: any){
        super(props);
        this.state = {
            inputCost: 0.01,
            inputName: "",
            inputDate: new Date(),
            selectedTags: [],
            inputNewTag: "",
            expenses: [],
        }
    }

    private changeCost = (event: any) => {
        let inputCost = event.currentTarget.value;
        this.setState({
            inputCost: inputCost,
        });
    }

    private changeName = (event: any) => {
        let inputName = event.currentTarget.value;
        this.setState({
            inputName: inputName,
        });
    }

    render(): JSX.Element {
        let list = this.state.expenses.map((expense, index) => {
            return <li key={index}>{expense.name}</li>
        });

        return (
            <div className="Root">
                <h1>Expense Tracker</h1>
                $ <input type="number" min="0.01" step="0.01" max="2500" 
                    value={this.state.inputCost}
                    onChange={this.changeCost} 
                />
                <input type="text" 
                    value={this.state.inputName}
                    onChange={this.changeName}
                />
                {/* {this.state.inputCost} */}
                {/* {this.state.inputName} */}
                {list}
            </div>
        );
    }
}

interface Expense {
    name: string;
    date: Date;
    cost: number;
    tags: string[];
}

export default Root;

