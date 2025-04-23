# infra/variables.tf

variable "environment" {
  description = "Deployment environment (dev/stage/prod)"
  type        = string
  default     = "dev"
}

variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "eu-north-1"
}