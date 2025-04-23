# infra/outputs.tf

output "ecr_repository_url" {
  value = aws_ecr_repository.flask_app.repository_url
}

output "eks_cluster_name" {
  value = module.eks_cluster.cluster_name
}