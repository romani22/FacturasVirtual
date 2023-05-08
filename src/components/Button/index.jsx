import { Text, TouchableWithoutFeedback, View } from 'react-native';
import styles from './styles';
import { useEffect, useState } from 'react';

const Button = ({ title, textStyle, buttonStyle, actionPress, children }) => {
	const [content, setContent] = useState([]);
	useEffect(() => {
		if (children) {
			setContent(children);
		} else {
			setContent(<Text style={{ ...styles.textButton, ...textStyle }}>{title}</Text>);
		}
	}, [children]);

	return (
		<View>
			<TouchableWithoutFeedback onPress={actionPress}>
				<View style={{ ...styles.container, ...buttonStyle }}>{content}</View>
			</TouchableWithoutFeedback>
		</View>
	);
};

export default Button;
