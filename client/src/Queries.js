import { gql } from '@apollo/client';

export const GET_ATTENDANCE_OF_GROUP = gql`
    query GetAttendanceOfGroup($groupId: ID!, $dayId: ID!, $weekId: ID!, $markDate: String!) {
      bells {
        id
        startTime
        endTime
        lessons(groupId: $groupId, dayId: $dayId, weekId: $weekId) {
          id
          discipline {
            fullName
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