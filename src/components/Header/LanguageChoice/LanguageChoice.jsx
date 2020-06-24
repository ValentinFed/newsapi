import React  from 'react'


const languages = 
['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 
'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt' ,'lv', 'ma', 'mx', 
'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 
'th', 'tr', 'tw', 'ua', 'us', 've', 'za'];

class LanguageChoice extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            value: 'pl',
        }
    }

    onValueChange = (e) => {
        const value = e.target.value;
        this.setState({value});
        this.props.onLanguageChange(value)
    }


 render () {
     const {value} = this.state;
     return (
        <select value={value} onChange={this.onValueChange}>
            {languages.map(lang => (
                        <option key={value + Math.random()} value={lang}>{lang}</option>
                    ))}
        </select>
     )
 }

}

export default LanguageChoice