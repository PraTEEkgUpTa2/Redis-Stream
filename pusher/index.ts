import { createClient } from 'redis';

async function main() {
    const client = createClient();
    client.on('error', (err)=>{
        console.error('Redis Client Error', err);
    })
    .connect();

    const res = await client.xAdd('betteruptime:website', '*', {
        id: "1",
        url: "https://google.com"
    })

    console.log(res);

    client.destroy(); // to destroy thr connection
}

main();