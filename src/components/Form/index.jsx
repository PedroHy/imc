import { useState } from 'react'

import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard, TouchableWithoutFeedback  } from 'react-native';
import Result from '../Result';

const Form = () => {


    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [message, setMessage] = useState('')
    const [imc, setIMC] = useState(null)
    const [txtButton, setTxtButton] = useState('Calcular')

    
    const calcIMC = () => {
        
        return setIMC((weight.replace(',', '.') / (height.replace(',', '.') * height.replace(',', '.'))).toFixed(2))
    }

    const validate = () => {
        if (weight != '' && height != '') {
            calcIMC()
            setHeight('')
            setWeight('')
            if (imc < 18.5) {
                setMessage('Abaixo do peso')
            } else if (imc < 24.9) {
                setMessage('Peso ideal')
            }
            else if (imc < 29.9) {
                setMessage('Levemente acima do peso')
            }
            else if (imc < 34.9) {
                setMessage('Obesidade I')
            }
            else if (imc < 39.9) {
                setMessage('Obesidade II (severa)')
            } else {
                setMessage('Obesidade III (mórbida)')
            }
            return
        }
        setTxtButton('Calcular')
        setMessage('*preencha todos os campos')
        setIMC(null)
        setHeight('')
        setWeight('')

    }

    return (
        <View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View>
                    <Text style={styles.label}>Altura:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setHeight}
                        value={height}
                        placeholder='Ex. 1.75'
                        keyboardType='numeric' />

                    <Text style={styles.label}>Peso:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setWeight}
                        value={weight}
                        placeholder='Ex. 64.54'
                        keyboardType='numeric' />
                    <TouchableOpacity style={styles.button} onPress={() => validate()}>
                        <Text style={styles.buttonText}>{txtButton}</Text>
                    </TouchableOpacity>

                    <Result message={message} result={imc} />
                </View>
            </TouchableWithoutFeedback> 
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        fontSize: '16px',
        fontWeight: '600',
        marginBottom: '5px'
    },

    input: {
        height: '20px',
        padding: 5,
        paddingBottom: 10,
        fontSize: '24px',
        marginTop: '2%',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cacaca'
    },

    button: {
        backgroundColor: '#1EB2FC',
        borderRadius: 20,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginTop: 32
    },

    buttonText: {
        fontSize: '24px',
        color: "#fff",
        fontWeight: 'bold'
    }
})

export default Form;