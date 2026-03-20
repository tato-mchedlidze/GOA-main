function InfoComponent(props) {
console.log(props);

    return (
        <div>
            <p>Name: {props.username}</p>
            <p>Surname: {props.surname}</p>
        </div>
    );
}

export default InfoComponent;
