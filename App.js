import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import Routes from './src/routes';
import Notas from './src/service/Notas';

export default function App() {

  useEffect(() => {
    Notas.createTable();
  }, []);

  return (
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
  );
}