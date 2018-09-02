import React, {Component} from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>URL</th>
            </tr>
        </thead>
    );
}

class TableBody extends Component {
    
    state = {
        monsters: [],
        url: "http://www.dnd5eapi.co/api/monsters/"
    };

    componentDidMount() {
        fetch(this.state.url)
        .then(response => response.json())
        .then(data => {
            this.setState({
                monsters: data.results
            });
        });
    }
    
    render() {
        const { monsters } = this.state;

        // Filter monsters using searchString
        let monstersToDisplay = monsters.filter(monster => monster.name.toLowerCase().includes(this.props.searchString));

        const rows = monstersToDisplay.map((monster, index) => {
            return (
                <tr key={index}>
                    <td>{monster.name}</td>
                    <td>{this.props.testValue}</td>
                </tr>
            );
        });

        console.log(rows);
    
        return <tbody>{rows}</tbody>;
    }
}

class MonsterTable extends Component {
    render() {

        return (
            <table>
                <TableHeader />
                <TableBody searchString={this.props.searchString} />
            </table>
        );
    }
}

export default MonsterTable;
