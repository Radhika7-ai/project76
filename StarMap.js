import React , {component} from 'react' ;
import {Text , Veiw} from 'react-native' ;

export default class StarMapsScreens extends Component {
    render() {
        return (
            <Veiw
                style = {{
                    flex: 1 ,
                    justifyContent: "center" ,
                    alignItems: "center" ,
                }}>
                <Text>Star Maps Screen</Text>
            </Veiw>
        )
    }
}