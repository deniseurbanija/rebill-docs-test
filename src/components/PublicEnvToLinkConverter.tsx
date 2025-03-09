import React from 'react';

interface PublicEnvsToLinkConverterProps {
    env: string;
    children: React.ReactNode;
}

const PublicEnvToLinkConverter: React.FC<PublicEnvsToLinkConverterProps> = ({ env, children }) => {
    const value = process.env[env];
    const href = value || '#'; // Fallback to '#' if the environment variable is not defined.

    return <a  href={href}>{children}</a>;
};

export default PublicEnvToLinkConverter;
