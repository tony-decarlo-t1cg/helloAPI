pipeline {
    agent any 
    stages {
        stage('Update Source Code') { 
            steps {
                build job: 'tony-update-code'
            }
        }
        stage('Deploy') { 
            steps {
                build job: 'tony-deploy-service'
            }
        }
        stage('Configure') { 
            steps {
                 build job: 'tony-configure-kong'
            }
        }
    }
}
