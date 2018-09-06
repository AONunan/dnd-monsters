import React from 'react';
import monstersJson from './Data/5e-SRD-Monsters.json'

const MonsterDetails = (props) => {
    let rows = props.addedMonsters.map((monsterName, index) => {

        let monster = monstersJson.find((object) => object.name === monsterName);
        // console.log("monster:", monster);

        return (
            <tr key={index}>
                <td>{monster.name}</td>
                <td>{monster.type}</td>
                <td>{monster.hit_points}</td>
                <td>{monster.actions[0].name}</td>
            </tr>
        )
    });

    return (
        <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Basic Info</th>
            <th>Stats</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>{rows}</tbody>
        </table>
    );
}

export default MonsterDetails;
