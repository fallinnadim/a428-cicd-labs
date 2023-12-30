// properties([pipelineTriggers([githubPush()])])

// node {
//     git url: 'https://github.com/dicodingacademy/a428-cicd-labs.git', branch: 'react-app'
//     docker.image('node:16-buster-slim').inside('-p 3000:3000') {
//         stage('Build') {
//             sh 'npm install'
//         }
//         stage('Test') {
//             sh './jenkins/scripts/test.sh'
//         }
//         stage('Manual Approval') {
//             input message: 'Lanjut ke tahap Deploy? (Klik "Proceed" untuk mengakhiri)' 
//         }
//         stage('Deploy') {
//             sh './jenkins/scripts/deliver.sh'
//         }
//     }
// }
pipeline {
     agent {
         docker {
             image 'node:16-buster-slim'
             args '-p 3000:3000'
         }
     }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }
        stage('Manual Approval') {
            steps {
                input message: 'Lanjut ke tahap Deploy? (Klik "Proceed" untuk mengakhiri)' 
            }
        }
        stage('Deploy') {
            steps {
                sh './jenkins/scripts/deliver.sh'
            }
        }
    }
}