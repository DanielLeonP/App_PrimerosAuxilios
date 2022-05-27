const InfoPage = () => {
  return (
    <>
      <SafeZone> 
        <div
        style={{
          display: 'flex',
          justifyContent: 'Right',
          alignItems: 'Right',
          height: '100vh',
          color: '#000'
        }}>
          <h1>Todo lo que vayas a poner, en esta pag, va dentro de la safezone, si no, el navbar lo va a tapar</h1>
        </div>
      </SafeZone>
    </>
  );
};
  
export default InfoPage;