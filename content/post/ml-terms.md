---
layout:     post
title:      ml-terms
date:     2023-07-05
description: ML Terms
categories: [ "ML"]
tags:
    - ml-general
---


# General

#### Latent Space and Latent Vector
- latent : (of a quality or state) existing but not yet developed or manifest; hidden or concealed.
- represenations : encoded versions of the original input
- latent vectors (embeddings, embedding vector) : intermediate representations, embedding vectors are representations where similar items are close to each other.
- latent space (latent feature space, embedding space) : the space into which embedding vectors are mapped.


#### semantic
- word has higher semantic meanings than images (pixels)
    - word : highly semantic and information dense
    - images : natural signals with heavy spatial redundancy (audio as well)
each pixel has almost no semantic meaning alone but word does

#### supervised learning
 - input-output pairs, learn intermediate system that maps inputs to correct outputs

#### semi-supervised learning

1. use correctly labeled images to train a classification model
2. use above model to label the unlabelled images (use only high confidence ones)
3. train model from 1
4. repeat 1~3 until all the data are utilised

#### self-supervised learning
- sometimes it's considered subset of unsupervised learning but ...
>  As a result of the supervisory signals that inform self-supervised learning, the term "self-supervised learning" is more accepted than the previously used term "unsupervised learning." Unsupervised learning is an ill-defined and misleading term that suggests that the learning uses no supervision at all. In fact, self-supervised learning is not unsupervised, as it uses far more feedback signals than standard supervised and reinforcement learning methods do. https://ai.facebook.com/blog/self-supervised-learning-the-dark-matter-of-intelligence/

- self-prediction(generation/reconstruction) and contrastive learning are subset of this learning method

#### self-prediction(generation/reconstruction) learning

![self-prediction](/img/self-prediction.png)
하나의 data sample 내에서 한 파트를 통해서 다른 파트를 예측하는 task

- examples:
  - MAE(masked autoencoder) → vision, representation learning
  - MSN(masked Siamese Networks) → vision, representation learning
  - MLM(maksed language modeling) → NLP, represenatation learning
- frameworks / materials:
  - [lightly](https://github.com/lightly-ai/lightly) : computer vision, self-supervised learning framework, has models like MAE, MSN, DINO, SimCLR and tutorials
#### contrastive learning

#### unsupervised learning
- input data have no labels, find underlying patterns with each dataset

# self-supervised learning (SSL) related

#### contrastive learning
two views of the same images to be mapped to similar representations

#### self-prediction (generation / reconstruction)
learning to predict masked patches of an image or representations

#### MIM
masked image modeling

#### MAE
masked autoencoder

#### dimensional collapse
(in vision self-supervised learning): all representation vectors cluster at a single point; the model creates the exact same embedding for each input.

for example, this happens often when we train a model with contrastive learning method and use only positive pairs for representation learning. Then the best thing model can do is map input image to same thing, then the output will be always close in representation space → minimum loss → but that doesn’t learn good representation.

#### EMA
exponential moving average, sort of moving average → exponentially decreasing weights to past values
(최근에 높은 가중치를 주지만, 오래된 과거도 비록 낮은 영향력이지만 가중치를 두여하도록 고려한 방법이다)

#### Siamese neural network
A Siamese neural network is an artificial neural network that uses the same weights while working in tandem on two different input vectors to compute comparable output vectors. Often one of the output vectors is precomputed, thus forming a baseline against which the other output vector is compared.

#### linear probing
freeze pre-trained model, add linear layer / MLP module for downstream task and evaluate

#### partial fine-tuning
linear probing + train last several layers and evaluate

#### fine-tuning
fine-tuning is usually done (with downstream task) after pre-training (with upstream task)
and train all weights of the model (pre-trained one from upstream task)

# References
- [Machine Learning FAQ](https://sebastianraschka.com/faq/docs/representation-embedding-latent.html#:~:text=Machine%20Learning%20FAQ&text=latent%20vectors%20are%20intermediate%20representations,are%20close%20to%20each%20other)
- [Review of A Simple Framework for Contrastive Learning of Visual Representations](https://mvje.tistory.com/49)
- [A cookbook of self supervised learning](https://arxiv.org/abs/2304.12210)
- [Naver: What do self-supervised vision transformers learn?](https://github.com/naver-ai/cl-vs-mim)
- [Meta: Understanding and mitigating dimensional collapse ](https://ai.facebook.com/blog/understanding-dimensional-collapse/)
