import { serialize } from 'cookie';

export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }
    const cookieNames = [
        'rebillOrganizationToken',
        'rebillUserEmail',
        'rebillName',
        'rebillLastName',
        'rebillOrganizationName',
        'rebillOrganizationLogo',
        'rebillAccountType',
        'rebillLanguage'
    ];
    const expiredCookies = cookieNames.map(name => 
        serialize(name, '', {
            maxAge: -1,
            path: '/',
        })
    );
    res.setHeader('Set-Cookie', expiredCookies);
    return res.status(200).json({ message: 'Signed out successfully' });
}
