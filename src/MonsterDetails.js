import React from 'react';
import monstersJson from './Data/5e-SRD-Monsters.json'

const BasicInfo = (props) => {
    return (
        <div>
            <strong>Type: </strong> {props.monster.type}
            <br/>
            <strong>Size: </strong> {props.monster.size}
            <br/>
            <strong>Alignment: </strong> {props.monster.alignment}
            <br/>
            <strong>Senses: </strong> {props.monster.senses}
            <br/>
            <strong>Languages: </strong> {props.monster.languages}
        </div>
    );
}

const Stats = (props) => {
    return (
        <div>
            <strong>AC: </strong> {props.monster.armor_class}
            <br/>
            <strong>HP: </strong> {props.monster.hit_points}
            <br/>
            <br/>
            <strong>STR: </strong> {props.monster.strength}
            <br/>
            <strong>DEX: </strong> {props.monster.dexterity}
            <br/>
            <strong>CON: </strong> {props.monster.constitution}
            <br/>
            <strong>INT: </strong> {props.monster.intelligence}
            <br/>
            <strong>WIS: </strong> {props.monster.wisdom}
            <br/>
            <strong>CHA: </strong> {props.monster.charisma}
        </div>
    );
}

const ListOfActionsAndAbilities = (props) => {

    let items = props.actions.map((action) => {
        return (
            <li className="list-group-item list-group-item-action" key={action.name} >{action.name}</li>
        )
    });

    return (
        <ul className="list-group list-group-flush">
            {items}
        </ul>
    );
}

const MonsterDetails = (props) => {
    let rows = props.addedMonsters.map((monsterName, index) => {

        let monster = monstersJson.find((object) => object.name === monsterName);
        // console.log("monster:", monster);

        return (
            <tr key={index}>
                <td> <em>{monster.name} </em></td>
                <td> <BasicInfo monster={monster} /> </td>
                <td> <Stats monster={monster} /> </td>
                <td> <ListOfActionsAndAbilities actions={monster.actions} /> </td>
                <td> <ListOfActionsAndAbilities actions={monster.special_abilities} /> </td>
            </tr>
        )
    });

    return (
        <div>
            <table className="table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Basic Info</th>
                    <th>Stats</th>
                    <th>Actions</th>
                    <th>Special Abilities</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
    );
}

export default MonsterDetails;
