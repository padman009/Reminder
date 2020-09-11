import React from 'react';
import { StyleSheet} from 'react-native';
import { Container, Text, Content, Header} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
});

function ItemScreen({ route, navigation }) {
    const {reminder} = route.params;
    const date = new Date(reminder.date);

    return (
        <Container>
            <Content>
                <Grid>
                    <Row>
                        <Col>
                            <Text style={{fontStyle:"italic", fontSize:36}}>{reminder.tittle}</Text>
                        </Col>
                        <Col style={{height: 50, textAlign:'right'}}>
                            <Text style={{textAlign:'right'}}>{date.toLocaleDateString()}</Text>
                        </Col>
                    </Row>
                    <Row>
                        <Text>{reminder.description}</Text>
                    </Row>
                </Grid>
            </Content>
        </Container>
    );
  }

export default ItemScreen;