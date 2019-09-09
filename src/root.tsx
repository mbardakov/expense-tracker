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
        console.log("root constructed")
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
        // this.setState({inputName});
        let inputCost = event.currentTarget.value;
        console.log("TypeInput called with: ", inputCost);
        this.setState({
            inputCost: inputCost,
        });
        console.log("typeInput set state to: ", this.state.inputCost);
    }

    private changeName = (event: any) => {
        // this.setState({inputName});
        let inputName = event.currentTarget.value;
        console.log("TypeInput called with: ", inputName);
        this.setState({
            inputName: inputName,
        });
        console.log("typeInput set state to: ", this.state.inputName);
    }

    render(): JSX.Element {
        let list = this.state.expenses.map((expense, index) => {
            return <li key={index}>{expense.name}</li>
        });

        return (
            <div className="Root">
                <h1>Dumb Shit 2019</h1>
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

