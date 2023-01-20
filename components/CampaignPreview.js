import TextSlider from './TextSlider';

const CampaignPreview = ({ visible }) => {
  return (
    <TextSlider
      extraStyles={{
        gridRowStart: '1',
        gridColumnStart: '1',
        opacity: visible ? '1' : '0',
        visibility: visible ? 'visible' : 'hidden',
      }}
      isCampaigns={true}
      slideClass='preview'
      title='Avni campaign articles'
      pretext='We are conscious of the impact of furniture making on our environment. From Global warming, to Deforestation, to'
    />
  );
};

export default CampaignPreview;
