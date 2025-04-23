# infra/main.tf

provider "aws" {
  region = "eu-north-1"
}

resource "aws_ecr_repository" "flask_app" {
  name = "flask-app-repo"
}

module "eks_cluster" {
  source          = "terraform-aws-modules/eks/aws"
  cluster_name    = "flask-app-cluster"
  cluster_version = "1.27"
  subnets         = module.vpc.private_subnets
  
  vpc_id = module.vpc.vpc_id
  
  node_groups = {
    main = {
      desired_capacity = 2
      max_capacity     = 3
      min_capacity     = 1
      instance_type    = "t3.medium"
    }
  }
}