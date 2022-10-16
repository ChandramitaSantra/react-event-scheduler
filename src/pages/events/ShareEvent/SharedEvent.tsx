import { FC, useEffect } from 'react';
import { useParams } from 'react-router';
import CardView from '../../../components/UI/CardView/CardView';
import Alert from '../../../components/UI/Alert/Alert';
import Spinner from '../../../components/UI/Spinner/Spinner';
import { EventFull, useGetEventMutation } from '../../../generated/graphql';
import { dateToTitle } from '../../../utils/dateTransforms';

const SharedEvent: FC = () => {
  const [getEvent, { data, loading, error }] = useGetEventMutation();

  const { id } = useParams();

  useEffect(() => {
    getEvent({ variables: { id: id ?? '' } });
  }, [getEvent, id]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <Alert
        msg={error.message}
        type="danger"
        ariaLabel="Warning"
        fillType="#exclamation-triangle-fill"
      />
    );
  }

  const card = {
    title: data?.getEvent.title,
    subtitle: dateToTitle(data?.getEvent as EventFull),
    content: data?.getEvent.description,
    createdBy: data?.getEvent.createdBy?.username,
    createdAt: data?.getEvent.createdAt,
    updatedAt: data?.getEvent.updatedAt,
  };

  return <CardView card={card} />;
};

export default SharedEvent;
