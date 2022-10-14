import React from 'react'
import {Button, Text, TextInput, View} from 'react-native'
import {styles} from "./style";
import {validPhoneNumber} from "./logic";

type MyProps = {
  // using `interface` is also ok
  placeholder:string,
  onSubmit:void,
};
type MyState = {
  textValue:string

};

export class Login extends React.Component<MyProps, MyState>{
  state: MyState = {
    textValue:''

  };
  constructor(props:any) {
    super(props);
  }
  // props: MyProps={
  //
  // }
  // constructor({ placeholder: string, onSubmit: void, ...props }) {
  //   super(props);
  //   this.state={
  //     placeholder:,
  //     onSubmit:'',
  //     textValue:''
  //   }

  // }
  // componentDidMount() {
  //   this.setState({
  //     placeholder:this.props.placeholder,
  //     onSubmit:this.props.onSubmit,
  //   })
  // }

  _onChangeTextInput=(text:string)=>{
    this.setState(() => ({
      textValue: text
    }))
    // console.log(this, text)

  }


  _onSubmit=()=>{
    validPhoneNumber(this.state.textValue).then(res=>{
    res && console.log("isvalid" )
  }).catch(()=>
      console.log("error -- is not valid")
    )


  }
  _onBtnSignInActive=()=>{
    return (this.state.textValue!==undefined && this.state.textValue!==null) ? this.state.textValue.length !== 0 : false
  }

  render() {
    return(
    <View style={{width:'100%', paddingHorizontal:'10%', alignItems:'center'}}>
      <TextInput keyboardType={'number-pad'} style={styles.inputStyle} placeholder={this.props.placeholder} onChangeText={this._onChangeTextInput} />
      <Button disabled={!this._onBtnSignInActive()} title={'Signin'} onPress={this._onSubmit}/>
      <Text >signup</Text>
    </View>
    )
  }
}
