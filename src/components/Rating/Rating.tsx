type RatingProps = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}
type StarPropsType = {
    selected: boolean;
}

export function Rating(props: RatingProps) {

    if (props.value === 1) {
        return (<>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </>)
    }
    if (props.value === 2) {
        return (<>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </>)
    }
    if (props.value === 3) {
        return (<>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </>)
    }
    if (props.value === 4) {
        return (<>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
        </>)
    }
    if (props.value === 5) {
        return (<>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
        </>)
    } else {

        return (
            <div>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        );
    }
}

function Star(props: StarPropsType) {
    if (props.selected === true) {
        return (
            <span>
        <b>star </b>
      </span>
        );
    } else {
        return (
            <span>star </span>
        )
    }
}

export default Rating;
