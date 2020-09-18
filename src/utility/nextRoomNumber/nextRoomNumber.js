import _ from 'lodash';

const nextRoomNumber = (props) => {
    //console.log(props)
    let num = 1;
    let regex =  /\d+/g;
    let roomsNumbers = [];

    if(!_.isEmpty(props.rooms)) {

        for (let x in props.rooms) {
            roomsNumbers.push(
                props.rooms[x].roomName.match(regex) !== null ? props.rooms[x].roomName.match(regex).toString() : '0')
        }

        num = Math.max(...roomsNumbers) +1

    }

    return num;

}

export default nextRoomNumber;