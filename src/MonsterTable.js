import React, {Component} from 'react';
import monstersJson from './Data/5e-SRD-Monsters.json'

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Add</th>
                <th>Name</th>
                <th>Type</th>
                <th>HP</th>
                <th>AC</th>
                <th>CR</th>
            </tr>
        </thead>
    );
}

class TableBody extends Component {
    
    state = {
        
    };

    sortArray = (a, b) => {
        let sort_key = "challenge_rating";
        sort_key = "armor_class";
        sort_key = "name";
        return (a[sort_key] > b[sort_key]) ? 1 : ((b[sort_key] > a[sort_key]) ? -1 : 0);
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
                    <td><button onClick={() => this.props.monsterAdded(monster.name)}>+</button></td>
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
