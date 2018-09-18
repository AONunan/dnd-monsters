import React, {Component} from 'react';
import monstersJson from './Data/5e-SRD-Monsters.json'

class TableBody extends Component {
    
    state = {
        
    };

    sortArray = (a, b) => {
        const sortKey = this.props.sortKey;
        return (a[sortKey] > b[sortKey]) ? 1 : ((b[sortKey] > a[sortKey]) ? -1 : 0);
    }
   
    render() {
        let monstersToDisplay = [];

        monstersJson.map((value, index) => {
            let monsterObject = {
                name: value.name,
                type: value.type,
                hit_points: value.hit_points,
                armor_class: value.armor_class,
                challenge_rating: value.challenge_rating
            };

            monstersToDisplay.push(monsterObject);
        });

        // Filter monsters using searchString, converting both sides to lowercase
        let filteredMonstersToDisplay = monstersToDisplay.filter(monster => monster.name.toLowerCase().includes(this.props.searchString.toLowerCase()));

        filteredMonstersToDisplay.sort( (a, b) => this.sortArray(a, b) );
        // filteredMonstersToDisplay.sort(function(a,b) {return (a.challenge_rating > b.challenge_rating) ? 1 : ((b.challenge_rating > a.challenge_rating) ? -1 : 0);} );

        const rows = filteredMonstersToDisplay.map((monster, index) => {
            return (
                <tr key={monster.name}>
                    <td><button type="button" className="btn btn-primary" onClick={() => this.props.monsterAdded(monster.name)}>+/-</button></td>
                    <td>{monster.name}</td>
                    <td>{monster.type}</td>
                    <td>{monster.hit_points}</td>
                    <td>{monster.armor_class}</td>
                    <td>{monster.challenge_rating}</td>
                </tr>
            );
        });
    
        return <tbody>{rows}</tbody>;
    }
}

class MonsterTable extends Component {
    state = {
        sortKey: "name",
        sortDirection: 1
    };

    render() {
        return (
            <table className="table">
                <thead>
                <tr>
                    <th>Add/Subtract</th>
                    <th onClick={() => this.setState({ sortKey: "name" })}>Name</th>
                    <th onClick={() => this.setState({ sortKey: "type" })}>Type</th>
                    <th onClick={() => this.setState({ sortKey: "hit_points" })}>HP</th>
                    <th onClick={() => this.setState({ sortKey: "armor_class" })}>AC</th>
                    <th onClick={() => this.setState({ sortKey: "challenge_rating" })}>CR</th>
                    </tr>
                </thead>
                <TableBody searchString={this.props.searchString} monsterAdded={this.props.monsterAdded} sortKey={this.state.sortKey} />
            </table>
        );
    }
}

export default MonsterTable;
