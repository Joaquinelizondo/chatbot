const express = require('express');
const { Storage } = require('@google-cloud/storage');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Inicializa Google Cloud Storage
const storage = new Storage({
    credentials: {
        type: process.env.GC_TYPE,
        project_id: process.env.GC_PROJECT_ID,
        private_key_id: process.env.GC_PRIVATE_KEY_ID,
        private_key: process.env.GC_PRIVATE_KEY.replace(/\\n/g, '\n'),
        client_email: process.env.GC_CLIENT_EMAIL,
        client_id: process.env.GC_CLIENT_ID,
        auth_uri: process.env.GC_AUTH_URI,
        token_uri: process.env.GC_TOKEN_URI,
        auth_provider_x509_cert_url: process.env.GC_AUTH_PROVIDER_X509_CERT_URL,
        client_x509_cert_url: process.env.GC_CLIENT_X509_CERT_URL,
    },
});

// Endpoint para listar buckets
app.get('/api/buckets', async (req, res) => {
    try {
        const [buckets] = await storage.getBuckets();
        res.json(buckets.map(bucket => bucket.name));
    } catch (error) {
        console.error('Error fetching buckets:', error);
        res.status(500).send('Error fetching buckets');
    }
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Backend is running on http://localhost:${PORT}`);
});
