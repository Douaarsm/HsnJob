import React, { useEffect, useState } from "react";
import Tabletop from "tabletop";

const SheetData = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await Tabletop.init({
          key: '178l_9pd-lSP4SixFp-EkqmX3AiAqJioM7OtDys2B9uw',
          simpleSheet: true,
          prettyColumnNames: false,
          postProcess: (element) => {
            console.log('Element reçu:', element);
            return element;
          }
        });
        
        console.log('Données brutes reçues:', result);
        setData(result);
        setError(null);
      } catch (err) {
        console.error('Erreur lors de la récupération des données:', err);
        setError('Erreur lors de la récupération des données. Assurez-vous que la feuille est publiée sur le web.');
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <div style={{ padding: '20px' }}>
        <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>
        <div style={{ fontSize: '14px' }}>
          Pour publier votre feuille Google Sheet :
          <ol>
            <li>Ouvrez votre Google Sheet</li>
            <li>Cliquez sur &quot;Fichier&quot; {'->'} &quot;Partager&quot; {'->'} &quot;Publier sur le web&quot;</li>
            <li>Sélectionnez &quot;Feuille entière&quot; et &quot;Document web&quot;</li>
            <li>Cliquez sur &quot;Publier&quot;</li>
            <li>Rafraîchissez cette page</li>
          </ol>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Messages reçus</h2>
      {data.length === 0 ? (
        <p>Chargement des données...</p>
      ) : (
        <div style={{ display: 'grid', gap: '20px' }}>
          {data.map((item, index) => (
            <div 
              key={index}
              style={{
                padding: '15px',
                backgroundColor: '#f5f5f5',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              <h3 style={{ margin: '0 0 10px 0' }}>Message de {item.name}</h3>
              <div style={{ display: 'grid', gap: '8px' }}>
                <p><strong>Email:</strong> {item.email}</p>
                <p><strong>Téléphone:</strong> {item.phone}</p>
                <p><strong>Sujet:</strong> {item.subject}</p>
                <p><strong>Message:</strong> {item.message}</p>
                <p><strong>Date:</strong> {item.date || 'Non spécifiée'}</p>
                <p><strong>Heure:</strong> {item.time || 'Non spécifiée'}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SheetData;
