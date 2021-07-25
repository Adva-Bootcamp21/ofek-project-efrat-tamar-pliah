import gql from 'graphql-tag';
import { useMutation } from "@apollo/react-hooks";

export interface Variables {
  id: number;
  petId?: number;
}

//Todo - add the mutation here
const CLOSE_EVENT = gql`mutation CloseEvent($id: Int!, $petTypeCode: Int){
	closeEvent(eventId: $id, petTypeCode: $petTypeCode){
    id,
    petType{
      id,
      code,
      description
    },
    x,
    y,
    imageBeforeURL,
    imageAfterURL,
    adoptionStatus{
      id,
      code,
      description
    }
  }
}`;

const useCloseEvent = () => {
  return useMutation<{}, Variables>(CLOSE_EVENT);
};

export { useCloseEvent };
