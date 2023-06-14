import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './BottomTabsNavigator';
import AuthNavigator from './AuthNavigator';
import { useSelector } from 'react-redux';
import BackgroundImage from '../components/BackgroundImage';
const index = () => {
	const userId = useSelector((state) => state.auth.userId);
	return (
		<NavigationContainer>
			<BackgroundImage>{userId ? <BottomTabNavigator /> : <AuthNavigator />}</BackgroundImage>
		</NavigationContainer>
	);
};

export default index;
