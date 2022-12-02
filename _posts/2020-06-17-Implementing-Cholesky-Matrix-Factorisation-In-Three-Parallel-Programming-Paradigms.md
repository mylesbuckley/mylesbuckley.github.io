---
title: "Supercomputer vs Multi-Core vs GPU"
categories:
excerpt: "How do these three major paradigms stack up implementing an algorithm with opportunities for parallelism and points which require synchronization."
tags:
  - comp4300
---

I hope in this post to describe the interesting things I learnt while implementing 'Cholesky Factorization' on the three primary parallel computing platforms: supercomputer (networked computers), multi-core (multiple beastly CPU's on one motherboard), GPU (*tons* of simple cores on one chip). 


