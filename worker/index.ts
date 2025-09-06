import { createClient } from 'redis';

async function main() {
    const client = await createClient()
    .on('error', (err)=>{
        console.error('Redis Client Error', err);
    }).connect();

    const res = await client.xReadGroup('india','india-1',{
        key: 'betteruptime:website',
        id: '>'
    }, {
        COUNT: 2,
    })
    
    //@ts-ignore
    console.log(res[0].messages);

    client.destroy(); // to destroy thr connection
}

main();