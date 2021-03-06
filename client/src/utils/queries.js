import { gql } from '@apollo/client';

export const QUERY_APPLICATIONS = gql`
  query applications {
    applications {
      _id
      companyName
      position
      dateApplied
      location
      interview
    }
  }
`;

export const  QUERY_INTERVIEWS = gql`
query Application($interview: Boolean) {
  interview(interview: $interview) {
    companyName
    description
    position
    location
    interviewDate
    interviewTime
    dateApplied
    interviewLocation
    notes {
      noteText
    }
  }
}
`
export const  QUERY_REJECTIONS = gql`
query Application($rejection: Boolean) {
  rejection(rejection: $rejection) {
    companyName
    position
    location
    dateApplied
    dateRejected
  }
}
`;

export const QUERY_SINGLE_APPLICATION = gql`
  query singleApplication($applicationId: ID!) {
    application(applicationId: $applicationId) {
      companyName
      position
      description
      dateApplied
      location
      notes {
        noteText
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email  
      }
    }
  
`;

export const QUERY_ME = gql`
  query me {
    me {
      username
    }
  }
`;