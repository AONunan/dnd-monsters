import React, {Component} from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Add</th>
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

        // Filter monsters using searchString, converting both sides to lowercase
        let monstersToDisplay = monsters.filter(monster => monster.name.toLowerCase().includes(this.props.searchString.toLowerCase()));

        const rows = monstersToDisplay.map((monster, index) => {

            // Get the unique ID from the end of the URL
            const urlId = monster.url.split("/").slice(-1)[0];
            
            
            return (
                <tr key={urlId}>
                    <td><button onClick={() => this.props.monsterAdded(urlId)}>+</button></td>
                    <td>{monster.name}</td>
                    <td>{monster.url}</td>
                </tr>
            );
        });
    
        return <tbody>{rows}</tbody>;
    }
}

class MonsterTable extends Component {
    render() {

        return (
            <table>
                <TableHeader />
                <TableBody searchString={this.props.searchString} monsterAdded={this.props.monsterAdded} />
            </table>
        );
    }
}

export default MonsterTable;
