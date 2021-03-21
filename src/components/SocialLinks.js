import React from 'react';

import styled from 'styled-components';

//socialmedia icons
import Facebook from '../icons/Facebook';
import Pinterest from '../icons/Pinterest';
import Instagram from '../icons/Instagram';

const SocialLinksWrapper = styled.div`
    position: absolute;
    z-index: 4;
    display: flex;
    justify-content: space-between;
    transform: translate(-50%, -50%);
    top: 90%;
    left: 50%;
    width: 70%;
    max-width: 300px;
`;

function SocialLinks() {
    return (
        <SocialLinksWrapper>
            <Facebook />
            <Instagram />
            <Pinterest />
        </SocialLinksWrapper>
    );
}

export default SocialLinks;
