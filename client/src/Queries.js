import { gql } from '@apollo/client';

export const GET_ATTENDANCE_OF_GROUP = gql`
    query GetAttendanceOfGroup($groupId: ID!, $markDate: String!) {
      bells {
        id
        startTime
        endTime
        lessons(groupId: $groupId, date: $markDate) {
          id
          discipline {
            shortName
          }
          teacher {
            fullname
          }
        }
      }
      group(id: $groupId) {
        id
        name
        students {
          id
          fullname
          marks(markDate: $markDate) {
            id
            markDate
            absent
            lessonId
          }
        }
      }
    }
  `