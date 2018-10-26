import React from 'react';
import ReactTooltip from 'react-tooltip'
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

const statModifier = (stat) => {
    // default value
    if (stat == null) stat = "10"

    let modifier = Math.floor((Number(stat) - 10) / 2); // convert stat to modifier
    
    return stat + " (" + (modifier > 0 ? "+" : "") + modifier + ")"; // return in form: "15 (+2)"
}

const Stats = (props) => {

    return (
        <div>
            <strong>AC: </strong> {props.monster.armor_class}
            <br/>
            <strong>HP: </strong> {props.monster.hit_points}
            <br/>
            <strong>CR: </strong> {props.monster.challenge_rating}
            <br/>
            <br/>
            <strong>STR: </strong> {props.statModifier(props.monster.strength)}
            <br/>
            <strong>DEX: </strong> {props.statModifier(props.monster.dexterity)}
            <br/>
            <strong>CON: </strong> {props.statModifier(props.monster.constitution)}
            <br/>
            <strong>INT: </strong> {props.statModifier(props.monster.intelligence)}
            <br/>
            <strong>WIS: </strong> {props.statModifier(props.monster.wisdom)}
            <br/>
            <strong>CHA: </strong> {props.statModifier(props.monster.charisma)}
        </div>
    );
}

const ListOfActionsAndAbilities = (props) => {

    let items = null;

    // Check first that actions or special abilities exist
    if (props.actions != null) {
        items = props.actions.map((action) => {
            return (
                <li className="list-group-item list-group-item-action" key={action.name} data-tip={action.desc} >{action.name}</li>
            )
        });
    }

    return (
        <ul className="list-group list-group-flush">
            {items}
        </ul>
    );
}

const MonsterDetails = (props) => {
    let rows = props.addedMonsters.map((monsterName, index) => {

        let monster = monstersJson.find((object) => object.name === monsterName);

        return (
            <tr key={index}>
                <td> <em>{monster.name} </em></td>
                <td> <BasicInfo monster={monster} /> </td>
                <td> <Stats monster={monster} statModifier={statModifier} /> </td>
                <td> <ListOfActionsAndAbilities actions={monster.actions} /> </td>
                <td> <ReactTooltip /> <ListOfActionsAndAbilities actions={monster.special_abilities} /> </td>
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
