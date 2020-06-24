import React from 'react'

class CategoryDropdown extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            value: 'general',
        }
    }

    onValueChange = (e) => {
        const value = e.target.value
        this.setState({value})
        this.props.onCategoryChange(value)
    }


    render() {
        const {value} = this.state

        return (
            <select value={value} onChange={this.onValueChange }>
                <option value="business">Business</option>
                <option value="entertainment">Entertainment</option>
                <option value="general">General</option>
                <option value="health">Health</option>
                <option value="science">Science</option>
                <option value="sports">Sports</option>
                <option value="technology">Technology</option>
            </select>   
        )
    }

}

export default CategoryDropdown