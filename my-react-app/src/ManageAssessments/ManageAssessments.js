import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import CustomAssessment from './CustomAssessment';

 const ManageAssessments = () => {

    return(
        <ManageAssessmentsContainer>
            <ManageAssessmentsButton>
                <p>New Assessment</p>
            </ManageAssessmentsButton>

            <ManageAssessmentsLists>
                <p>My Assessments</p>
                <CustomAssessment/>
            </ManageAssessmentsLists>

        </ManageAssessmentsContainer>
    );

};

const ManageAssessmentsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const ManageAssessmentsButton = styled.div`
    cursor: pointer;
    height: fit-content;
    width: fit-content;
    margin-left: auto;
    padding: 10px 15px;
    background-color: rgb(0, 132, 255);
    border-radius: 5px;
    &:hover {
        background-color: rgb(0, 116, 224);
    }
    & p {
        color: rgb(235,235,235);
        margin: auto;
    }
`;

const ManageAssessmentsLists = styled.div`
    height: fit-content;
    width: inherit;
    margin: 10px 0px;
    border: 3px dashed rgb(200, 200, 200);
`;
export default ManageAssessments;