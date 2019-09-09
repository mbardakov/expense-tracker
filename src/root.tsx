import React from 'react';
// import Button from 'react-bootstrap/Button';

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

    private addToList = () => {
        let newExpense = {
            name: this.state.inputName ? this.state.inputName : "untitled expense",
            date: new Date(),
            cost: this.state.inputCost,
            tags: []
        }
        this.setState({expenses: this.state.expenses.concat([newExpense])});
    }

    private parseDate = (date: Date) => {
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
        return `${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`; 
    }

    render(): JSX.Element {
        let list = this.state.expenses.map((expense, index) => {
            return <li key={index}>{this.parseDate(expense.date)}: {expense.name}: {expense.cost}</li>
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
                <button onClick={this.addToList}>Add item</button>
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

