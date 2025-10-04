// script.js

document.addEventListener('DOMContentLoaded', () => {
  const tabBar      = document.getElementById('tabBar');
  const mainContent = document.getElementById('mainContent');
  const locationBar = document.getElementById('locationBar');

const movies = [
  {
    name: "Spiderman 3",
    url: "https://drive.google.com/file/d/1vi0w7U65XeR-u00AQ8uS9s3C-IoiV-_1/view?usp=drive_link",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTvtJHynVyQ4heV_qhd7we1gxax1BQ_sfgMpYwgOQ3-ix51l30RoRGb1vDNFzc3rbPjX-WjYzPS9ZWLyh3NntKI9wQMapJxwOjo76_5Rh5p"
  },
  {
    name: "Minions",
    url: "https://drive.google.com/file/d/1Ly6kH4RMc1kHLQJ1sdejKZHeA58oaKOZ/view?usp=drive_link",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ-VbuiZnnXZt-TRqp4Y9sZgRveSRRHlBoCaL2sdXj288_V6O_N-4AjCXqbXW7GwPwMeBWHRVoj0A3F1e2NzqIaQZnswKFIFjvCfCKfiezx"
  },
  {
    name: "Plankton Movie",
    url: "https://drive.google.com/file/d/1GhJnl35m05XYpjooWoxeg0lw54VpjCEx/view?usp=drive_link",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSb4-MHgRnKvKSzqa2zFmL8kChBccogsU9SI4LVvQv-KihibPzGnErPyuaXFEGvNMXieXUDgi7FIDRea01vSbLk08nnDD8UfaliAqC7rZn3oQ"
  },
  {
    name: "Interstellar",
    url: "https://drive.google.com/file/d/1rjx6-12dB11LWwj5jFEFX2QMuZiEVUFk/view?usp=sharing&t=5",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTHvAY355eBhx74kocxmcHX7nM_s67oYoWHROryP0eGWT1U-A26KFVCnXMbxntwDMoZVl9cY4LrGDqwzpevaX4YS3AS4AdUO36G3LkAHqGtPw"
  },
  {
    name: "Venom The Last Dance",
    url: "https://drive.google.com/file/d/1lbDigsHVXpiIT3qokPLcN3VKqDax7rgm/view?usp=drive_link",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSKOUuYG_bqk45tRmhjuQC9P7a6rR15NtOc1iIJVY3FgumJeQEhzj112uPY6nJOgfqAPxTB292PcK_KemYyGFz601lHtyu-H-mA_YZRUzgxpQ"
  },
  {
    name: "The Nun",
    url: "https://drive.google.com/file/d/1f54gZFt1PT6TllWwa-5SjtkRuOITxLNs/view?usp=drive_link",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_rB2LB8r7Khehp8rlA8EX7gWw1HA3D-I0blVev9tpY_QzoqbS"
  },
  {
    name: "Detective Pikachu",
    url: "https://drive.google.com/file/d/1lbcxI_SXJBrqnxe4GnZYIk5VDhKxCgoF/view?usp=drive_link",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ5sxoDwnyey_mC9cjsL4F6JLjaHjKXuAZC1WhfYcxKec11z4a9vo-1wcsDWlsKGy1Lwm9qAXZXO-DadhE4cHN_GvMnKYu1PertXSm1SPWR"
  },
  {
    name: "Sonic 3",
    url: "https://drive.google.com/file/d/13pgT7HSDRXYeXvkU0RAEqbdrHrFxPiIm/preview",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTI0qKL69nFDfhYa_R6gdYWJ2XsSEUD5GIch0RYojqyjZf9XKuwWBTChHP7OOepJtwBuqA1VAI0sdr9rSIDaX-zxz_dQ1v_AkdSMuf45WKS"
  },
  {
    name: "Dog Man",
    url: "https://drive.google.com/file/d/1aXHiOSQjs7rCj933p22WnVSHOsVnv7IB/view?usp=sharing",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTAGmqzhcMDgsQpZTf7Ug9EmUwbpuD65QPGY3FWvNYuzukGqzw0CummdA5ukxxcrSjC2J0Ervuz7GNbgZ39Go66xJ_wTiEEGmL87Fz9vhTU"
  },
  {
    name: "Wicked",
    url: "https://drive.google.com/file/d/1EiT5_VDJyMbrG5ezazVyzzOu1nWAkmE8/view?usp=drive_link",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYcOYWArCbHDSJ6tQYLGuFSv58v7GvnFfTYBzlR72v8R5UGOqsaM0ujajiIAiPlEUZFLAq_mZ6wkAD-w79U4XP7uwT_83JVcmtI1izrwt6"
  },
  {
    name: "The Wild Robot",
    url: "https://drive.google.com/file/d/1_N9iHDAM3RbU2a0GTfgcNXDGuZDT_yZ-/view?usp=drive_link",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPE_r-qYpRLnd-QGG_wejWhx1bS1EQ7tkL-5gBCsQ8SXPzSw1DSsDGQN3zVLe5cFbw2oQHVar3HdxhM6NWPQv6SfyYztepkFxLu_W2Aj7e"
  },
  {
    name: "Red One",
    url: "https://drive.google.com/file/d/1QQx9ogqUJzS3G8GIZXLBAhgx2s2Ol2zZ/view?usp=drive_link",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR9GBVkBtb63jm020aJOX0q-MzKG8sMBx0-vbBWCC1c4u8-2wTniVxu4QsO_MZXK7j_KfXWYB-Fi6IAG_VEY5cljwC5Aqy5mVLVa_hlnLqwpw"
  },
  {
    name: "Terrifier 3",
    url: "https://drive.google.com/file/d/1sAj4FqfEIzHPIW7ZUPGGSOFTTaJr5AGI/view?usp=drive_link",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT97pvd5g3bfBpkKY3yNPuE09evRNwIVzvvD51UF7VCWHirczqLdaMLv3uU50kzz0M3TRC1o52z2_m2MxC9oUoEJKhMR7NtUeMlLbiulxXa"
  },
  {
    name: "Smile 2",
    url: "https://drive.google.com/file/d/1PeOUtsdJfWRqJvGwBhRmeBc2fLiQyTJY/view?usp=drive_link",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcShia7nKnd5UAJzP4rgVmTn-qvLGKmjuYsld0dyu2wy4Z9kR1-DcbU0nq34Fq7raH8n-0xeQ98aG4u6WYy--S5AZqJgZBt0i22NDgaSzV_e"
  },
  {
    name: "Deadpool and Wolverine",
    url: "https://drive.google.com/file/d/17rO8-6BeGxZ_2HelJIU_mefZQ_j-cpIb/view?usp=drive_link",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcShLoc8-C_fWTV1r8UdzkdBC7S2eRyG-zJTSqYaYGDgAA1HJSiQfPYbe2ZX_AbX5a2HcxpMFtxuQPgleYT1h05DIYk45WivPL0L6kxDqI3O"
  },
  {
    name: "The Conjuring 3",
    url: "https://drive.google.com/file/d/1k0tAH--aSS2Ik_xCwr9nJSr1XAS0cFH6/view?usp=drive_link",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSwEdihy7sZ6QjDybyb39JxI43nKF3SRJG8HCGu0otXIND_MaTj8Uw54Le12Xs8qsd0-b4RhgZKb8MGKMtvVObPjXzerVaog9tdax2ZNtS-ow"
  },
  {
    name: "The Conjuring 2",
    url: "https://drive.google.com/file/d/1zECVNreFAl8LNGcOrlPqtMzw_Su1S3AC/view?usp=drive_link",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR0vKOUoGo3xMfW98mUXcDmr8Yz0IkZEhhtTW_mJVummhWBceb8PKPvctHhJRigwZTVRRB4tsSF_oEveVadvoPXAvuLVJ6mVCvIpDxy1zWm"
  },
  {
    name: "Air Buddies",
    url: "https://drive.google.com/file/d/11kIA5YMOUUPgNsNJWsiXSIXS7hIK04uj/view?usp=drive_link",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRfICw8fHpeKjZ8y3raEzlZqefvX5z770pvSjzDPZnodbH6lviDLB4ZFqUYwBKGvdLvJWscPBdiVTJvlMsXEOdO-qOM8X0d1_2NqRFLHibI"
  },
  {
    name: "Air Bud - Golden Receiver",
    url: "https://drive.google.com/file/d/1t9CveoDazqi1K1r_9UsjoFSTIs6NW6Wu/view?usp=drive_link",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRzvod75ldx6hyUsehDfS2WUCRqFs9U1Gs0DR3FSA3hk0B5SgkzfnmxAPiTvZUfCo1Gj0foNy5dK2jjCYOqiG8Z2XNgQfRpXvo4x3aHXRzH"
  },
  {
    name: "Air Bud",
    url: "https://drive.google.com/file/d/1Sofu_Y64wUhcyL_ZAFq6l58z-MZK8CTu/view?usp=drive_link",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRSF2ay4mJmdBZcmvXIHpW8jUsoZUNx-xP6XB-VPUw-Nk-AS_IUO5FKYneL7at8t6KmPWLsSgfgwmKQBvK77Cv3m93_z0Kq_AgqmAbkBicf"
  },
  {
    name: "Home Alone",
    url: "https://drive.google.com/file/d/18YKNCTokG3B7ZWzCE3thunyDJMktLxnm/view?usp=drive_link",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcShLkqj4nNWtqzFFd9sEd3Xtb4_oh_ML6HH_z8ZPtbDvPs23cd2_qdLu2EXQXvyKrL9hdqMasODmZB5YNTf-_9FrWR5qDaut0qDArO8dDrCNg"
  },
  {
    name: "Home Alone 2",
    url: "https://drive.google.com/file/d/1Aj4Ys3ofogKhxEAMh6PUncpYF_OHZ_ZK/view?usp=drive_link",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEbgE1pL6eFewD-_4D37YFcYLnGts3jPKjGzaVnZQ1n7i1yrdDdZIDvpeTLm4FpSuVL_nmjQt1RWlXhN_s05M4Hdj-7RN9kyhjChTbId_Gsg"
  },
  {
    name: "Toy Story",
    url: "https://drive.google.com/file/d/1fW6Ov5NIaRh4h78-qBpWeln_Vs9oEXOQ/view?usp=drive_link",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRz5ZLogbpTgkxkpDHs9yTq2mPKozFuc8W0qyVrwEe4jsGX2q5hlx0E0auGN_UjpizHjQ6smCpsQekaxzgZoGdbuLnqzDAV-_7YH7nQLqDL2Q"
  },
  {
    name: "Toy Story 2",
    url: "https://drive.google.com/file/d/1k3RVDc_Vah1H9lFsXQZJ6mE3KqdDcK_T/view?usp=drive_link",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSfF2UrS9slJ7ofsuMQ3BQXpZ1pvEdsmXHZCPmp0hbsEXM4ALBiLqJU9WvMMYc4k7mizsdHAP9E6FatB5c7_B_woJ5NON1zKPRi3ss3X9LB"
  },
  {
    name: "Toy Story 3",
    url: "https://drive.google.com/file/d/1k3RVDc_Vah1H9lFsXQZJ6mE3KqdDcK_T/view?usp=drive_link",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT6NOlhuoPUSeqZWRyWpDg3uDqxqA6iF8hk1C1PN_bP2zfEp83z1T_d3Ej7yzlZrJ_xeijkJJalsokVX08FgfLcNpTbBd1tGaDZ-EuaUIbwOA"
  },
  {
    name: "Moana",
    url: "https://drive.google.com/file/d/1EsX8k7nfYQrzC6apqJqnyfH7HLAHl31G/view?usp=drive_link",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSp1znuxBlgkvHZWpFIVySHMiHmpYNuo0pytKBOs76MBJ7w7aJGLflK1RzQe2b0SuMkRVFkjXEN6aM44PaY4jZrHUYr5QRJNbUoCsP7mVsKdA"
  },
  {
    name: "Finding Nemo",
    url: "https://drive.google.com/file/d/11CN0fT7CwCHgz__mY4FWjcoT5w_wZD9S/view",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQnPENrG5A1NyZIf0qKr_O0Ync3vPutn-rcIrGgCzxgttfkBj8z0OQw6eSU7QV6IAZAdvZ21wgmGRcfmKsi9UxqSo_eFifrymlP67bkBVZxCg"
  },
  {
    name: "Finding Dory",
    url: "https://drive.google.com/file/u/0/d/1uDOp65KtEnID520JjNC_kMOm91mNfGq6/view",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS65VvGXg5f765kvNxZdg4WFPD8jGgjI0A-_8Xj2fHyL7zhvW2ydw1HMdcIf8BwgbFxBO2EDX9HhC4ftT4-c2wYPravFyFG59J_F6rRAX91IA"
  },
  {
    name: "Inside Out",
    url: "https://drive.google.com/file/d/1e0OdhlzTKWie6TDXNDOKjKYXbfYfmz6t/view?usp=drive_link",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTZh-Dtz63GnyWbc5NVpI5NdyROTPiVCI7Xoi13s5Nd_gW7oAR1we1hpGy590yc7QXbgL-BWQbiB3suxdMVh98eXVsAqrCz75Ljgv3Xl5p-aQ"
  },
  {
    name: "Inside Out 2",
    url: "https://drive.google.com/file/d/1SABVZNMwHTME4hsFwL9IWyWZPKDTBSoT/view?usp=drive_link",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQilfB2ybVsnQv1yL5pU4owpBPiIewcSOEhVyxssvm2L6GoHcs2G4fBGGH2hdMg-VvBWLvuD0N2Ni0WcTiI-26zb65qeDvTW93icCAGzvMh"
  },
  {
    name: "Spiderman Far From Home",
    url: "https://drive.google.com/file/d/1YFUpSLmxb6xIlbdJXScIkRYvwYxvJ_18/view?usp=drive_link",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTXYnm9EGatmvYg5yT4OD7IX56CnBUTEgb1xEU7Rw07JFDmarllPlFoeKtxL0cWoKgfaV49EGvAiMt7YKQ35vOsQHsetZeKltQRcUUeL0GcHQ"
  },
  {
    name: "Spiderman Homecoming",
    url: "https://drive.google.com/file/d/1H6yP8ItXHjAT69uL8CTAlvi90sPx2399/view?usp=drive_link",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQiZpkI_WKDb9Z1OFXzxXVwCNx--qhs1YHLuoouwWL8i2ghNLPUAPWmO8YsKw2BxgJJ4IxSl67KNUIE4xjaH01pmDZV2q8Mqs_mJMqMxuAt"
  },
  {
    name: "Spiderman Across the Spiderverse",
    url: "https://drive.google.com/file/d/1qoUQHjst9NI4d2venCeeajFJFnpg2d0t/view?usp=drive_link",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTl6ULittF4u5ei5NHLsPdTI3AORm8DGSpBNkhY9_PjqncWEijqDQpKMRxPMuS0SDlSCNvUAxhHDyWNnozsBrbPc98jYl1hhARbQNc49iqssg"
  },
  {
    name: "Paw Patrol The Mighty Movie",
    url: "https://drive.google.com/file/d/1VushZyanpFWyaz8lMVQreiEGGef2jTk8/view?usp=drive_link",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQRJaKzgaE5a9F2F2DftQ0g01-MIkK9o5q5t6aI9p2sPED7xhnAJVaiOI2O4swABCB71mqpsqaR3n7KffI0SZgxZ3NRW0ifGHJMwTKCkr4t"
  },
  {
    name: "Despicable Me 4",
    url: "https://drive.google.com/file/d/1siki1wYP3LpfjFpUT8Z9lJuJzl7MdBhX/view?usp=drive_link",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS9h-c8Ta0zf8NjmT10OwZsiBILLRFFt_j8DIOdZbUlSYykC8FiO1qwtrk5vqn2EwVJWkDCpUTeAf6IEWiBdBuHaGascMdz7CcQg6vlx_v0yw"
  },
  {
    name: "Hop",
    url: "https://drive.google.com/file/d/1RlECgiqfYKuUhXkRC05H765Uyl9cQHE8/view?usp=drive_link",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRel-macQ9MmfOM84UKrH1A3qzd4EIYVyccmmkqeMcr7tGdcM_G2daZkFXJ5rDCTcUTyP38n-4iRh0KOOAwIESVgGEcWHu2Y1KoMiye3Sv_"
  },
  {
    name: "Cars 2",
    url: "https://drive.google.com/file/d/1TKx-RUpz44aUVku1n-BJnJXXtjPIPOgV/view?usp=drive_link",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR84KTOlUBr5ObvOsm8su-avHYH4DR7eiHcaCGIfYDsZPJRPamHj9c7AEQa4ZzPUwRclOSubedXrrwy5P7u-B2Wno7yDk30pvuCEsKZYef1"
  },
  {
    name: "Venom Let There Be Carnage",
    url: "https://drive.google.com/file/d/1bcJ4X5WvyimpbB8U15Mb1j-kzct-nFIZ/view?usp=sharing",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTqicOZ67g1QD7ckcZ4V4D32X_PeDF5gfErKBbnzBI-HqOboR2PbreqHq1CsRFjSLpSyao2ALsZ0mzsHuJi43Vf__0GdawwS2pnGAg9ucejxA"
  },
  {
    name: "Venom",
    url: "https://drive.google.com/file/d/1XoN0B1rsNKDDRphmI8bM606r4wRQ6JUH/view?usp=drive_link",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSfUqnIx2letaDvfCVvG_HtYJaFxt94XwWGYCYunoNFRLZEWydG2cy0RdO2UCyfezZs2NGcf2-MDDYOiaE0c7XPVz9FRTGQS_R2gC03qBjUpg"
  },
  {
    name: "MIB",
    url: "https://drive.google.com/file/d/1lKwqLzxgLyJi0BhN9Lc8HdHMM7LMVb5V/view",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT52kGLJTirS71q89pBNEKTEJoQOHQWgkKHMhjX-nEWZSK09tMUZ6JYHUUanBVc_9qrkr8o6goK30pdPGacBdEby1PAoJU99g3nX0nfolOz"
  },
  {
    name: "John Wick",
    url: "https://drive.google.com/file/d/1X9Kflcg0LuRjceV6JghCzs49px8cRTIk/view",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSSbIn-hVFssepKO3JhHbOTr2defK-rip7kLsnNs2_BbA9UZb9-wiiLjPurCWHG9xbztXU-WZ5FXQB99LvRBWLRCsEcWWLQaaMyyTtq1__7KA"
  },
  {
    name: "John Wick 2",
    url: "https://drive.google.com/file/d/1gzsZEVTNEb93tSa0nuzlpR2n20D4Dyx9/view",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy9Rh7bYkk1_yfJ3kOmT2KUm3IQxH3CBH3BhMd2Z6wWkSKFX8e4d01ticEDtuYgMg-ghesLkSVtltiycjpXaaKnFA0-Cu7rZI1ujmDKXXsPg"
  },
  {
    name: "John Wick 3",
    url: "https://drive.google.com/file/d/1CsIZrKGXn557DdOJrdz5ty7nkg0i4CWR/view",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRhHH9aBlnHJDVC66i8_sFybI_atElDW3QmrWj2AS3JTIMnz1-aOEZzGWZNNEE_wQXoMwIy1lczj1kBdToEVwjx1_JeMC37uv15znnz0UwQ"
  },
  {
    name: "John Wick 4",
    url: "https://drive.google.com/file/d/10LUlcX6Hu9pn3c3xmPlfJOf20Qjwgxq_/view",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSXOM2OVrKRPFs2OinHWFBp4RsAFQQEimynqGReUeHaNRhmwoXFDrm0uL7N_RQJPm6gEjPbvBCa6hLoZHuSHWykyybb0QRYLpUptw902xRUsw"
  },
  {
    name: "Penguins of Madagascar",
    url: "https://drive.google.com/file/d/1FhmVu6-NhOXoY12O7qbmLfpugGU2GtVR/view?usp=drive_link",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQjVu4XQdcn-l9yOzFMGYorT2dLK_yUIp5Pz_WTe1afV7L12xfBNvUV0exJgjgroez8Jvmve-KaVQoSroWzVGyo8LL9mgH3hMOBCW2KpUdh"
  },
  {
    name: "Toy Story 4",
    url: "https://drive.google.com/file/d/1bFUbsQ9VEazeCt5l_VBVDtjCsbJmZ_Vr/preview",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-5wmW0Dq55rI6tlHBOSD4S9vJ9cHmZoFJ2Olb-A6TMz1KPMrE8t8xby9CyKW6hEE36EX9QXp429q8-dyV4LgJqnrpvo6cjPPJ1_9JWfhp7w"
  },
  {
    name: "The Garfield Movie",
    url: "https://drive.google.com/file/d/1kZN_BlITRMm-OIg_WVxYI6sZhisRqp1E/view?usp=drive_link",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDVIwLDzBxEHgVVjL51ds0jiQK6aJXGxbE1XHB0RudB2ggHH0e34sPJL_0VR8trnvEVLM_oH427qtoEtuae60OOLgDP960-oD8en9QnW2G"
  },
  {
    name: "IF",
    url: "https://drive.google.com/file/d/1IxhHBfFW7VEOgMWqBTxVkkObeF3S8qI-/view?usp=drive_link",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTqAe4slyAntvZcr4jrquXsCTVi3ceREidpi_QuGvD8LMowWh9LZ1Y8CPg5BNfbW19Jq5cUodVSZyBv-CfMhMY1iGAzDCc2OuCjTbLpkdE2"
  },
  {
    name: "Taylor Swift Eras Tour",
    url: "https://drive.google.com/file/d/1P5ifQa2abiquJOkOFe8jGhz73-Hu3ANv/view?usp=drive_link",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS-0tVxDYHo2GD3X_NP2MTX4C7v3mMGT7jgu97EcKv-1eKoBedR5OZyCYXtx9YRpTJyiggKKJC6YtNfX7mpW2Kj4qvf2999rCerrlcg-zeI0Q"
  },
  {
    name: "Zootopia",
    url: "https://drive.google.com/file/d/1HYeIrbf8A-vfvJsvYP59AQzG9l8nt03h/view?usp=drive_link",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQjfJ7tIG2Cn6wN7-2geQfpNZgvYT1JAs-PIR6i57p7ZNu0wLrdSNlNWAgDlRwykDgEnJhUFTSCqHiht02oljfM2iZRPKAuV6DbgOAQgzNV"
  },
  {
  name: "Lorax",
  url: "https://drive.google.com/file/d/1Kl4ieKALPoEYbllsRy7V8AYiPtJATg7W/view?usp=drive_link",
  image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRP7rBQEL_-Xz7_OMNi3g0KpW4_TOiKs6GYu4GOfPQvyY46vA1XYoyhn1ZSVSCFuSrC8meWVaYp0u5ps3Pt8pLLR3lRpGGyPAwTJttRHdwj"
  },
  {
  name: "Scream VI",
  url: "https://drive.google.com/file/d/1zLFZE5jEzvjRSAawv9gOk-E5FYhsYblJ/view?usp=drive_link",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0iuWQKijzD9-n-DCzIeZ3hITTO9mAK0YVZiTt9AF_2AnSrTxFdnpCXzDq8PjYjqlevUUM0aIAV6uuyc7Ltx4b8-r5YI2L1yE3NxXHLPgmmQ"
},
];

  const themes = ['white', 'ocean', 'dark'];

  function applyTheme(theme) {
    themes.forEach(t => document.body.classList.remove(`${t}-theme`));
    document.body.classList.add(`${theme}-theme`);
    localStorage.setItem('theme', theme);
  }

  const savedTheme = localStorage.getItem('theme') || 'white';
  applyTheme(savedTheme);

  function updateLocation(path) {
    locationBar.textContent = `https://fairnetwork${path}`;
  }

  function clearActiveTab() {
    tabBar.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  }

  window.openTab = function(name) {
    clearActiveTab();
    let tab = Array.from(tabBar.children).find(t => t.textContent === name);
    if (!tab) {
      tab = document.createElement('div');
      tab.className = 'tab';
      tab.textContent = name;
      tab.addEventListener('click', () => selectTab(tab, name));
      tabBar.appendChild(tab);
      tab.animate([{ transform: 'scale(0.8)' }, { transform: 'scale(1)' }], {
        duration: 200,
        easing: 'ease-out'
      });
    }
    tab.classList.add('active');
    selectTab(tab, name);
  };

  function selectTab(tabElement, name) {
    clearActiveTab();
    tabElement.classList.add('active');

    if (name === 'Home') mainContent.classList.add('home');
    else mainContent.classList.remove('home');

    if (name === 'Home')                showHome();
    else if (name === 'Fair Games')     showGamesTab();
    else if (name === 'Movies')         showMoviesTab();
    else if (name === 'Settings')       showSettingsTab();
    else if (name === 'Music Player')   showMusicTab();
    else showHome();
  }

  function showHome() {
    updateLocation('');
    mainContent.innerHTML = `
      <h1>Fair Network</h1>
      <div class="button-group">
        <button class="nav-btn" data-tab="Home">Home</button>
        <button class="nav-btn" data-tab="Fair Games">Games</button>
        <button class="nav-btn" data-tab="Movies">Movies</button>
        <button class="nav-btn" data-tab="Music Player">Music</button>
        <button class="nav-btn" data-tab="Settings">Settings</button>
      </div>
    `;
    mainContent.classList.add('home');
    mainContent.querySelectorAll('.nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        btn.animate([{ transform: 'scale(0.95)' }, { transform: 'scale(1)' }], {
          duration: 100,
          easing: 'ease-out'
        });
        openTab(btn.dataset.tab);
      });
    });
  }

  function showGamesTab() {
    updateLocation('/games');
    mainContent.classList.remove('home');
    mainContent.innerHTML = `
      <h1>Fair Games</h1>
      <input type="text" id="searchInput" placeholder="Search games…" />
      <div id="gameInfo">Games: 0</div>
      <div id="gameContainer"></div>
      <div class="modal" id="gameModal">
        <div class="modal-content">
          <button id="closeGameModal" class="modal-close">&times;</button>
          <h2 id="gameTitle"></h2>
          <iframe id="gameFrame" frameborder="0"></iframe>
          <div class="controls">
            <button id="downloadBtn">Download</button>
            <button id="fullscreenBtn">Fullscreen</button>
            <button id="blobBtn">Open in Blob URL</button>
          </div>
        </div>
      </div>
    `;
    const gameContainer  = document.getElementById('gameContainer');
    const searchInput    = document.getElementById('searchInput');
    const gameInfo       = document.getElementById('gameInfo');
    const gameModal      = document.getElementById('gameModal');
    const gameFrame      = document.getElementById('gameFrame');
    const closeModal     = document.getElementById('closeGameModal');
    const downloadBtn    = document.getElementById('downloadBtn');
    const fullscreenBtn  = document.getElementById('fullscreenBtn');
    const blobBtn        = document.getElementById('blobBtn');

    closeModal.addEventListener('click', () => {
      gameModal.style.display = 'none';
      gameFrame.src = '';
      exitActiveFullscreen();
    });

    searchInput.addEventListener('input', () => {
      const q = searchInput.value.toLowerCase();
      document.querySelectorAll('.game-card').forEach(card => {
        const title = card.querySelector('h2').textContent.toLowerCase();
        card.style.display = title.includes(q) ? 'block' : 'none';
      });
    });

    let latestSHA = '';
    let gamesData = [];

    async function loadGames() {
      try {
        const commits = await fetch(
          'https://api.github.com/repos/elite-gamez/elite-gamez.github.io/commits'
        ).then(r => r.json());
        const sha = commits[0].sha;
        if (sha === latestSHA) return;
        latestSHA = sha;
        const url = `https://cdn.jsdelivr.net/gh/elite-gamez/elite-gamez.github.io@${sha}/games.json?cb=${Date.now()}`;
        gamesData = await fetch(url).then(r => r.json());
        renderGames();
      } catch (err) {
        console.error('Game load error:', err);
      }
    }

    function renderGames() {
      gameContainer.innerHTML = '';
      gamesData.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.innerHTML = `
          <img src="https://rawcdn.githack.com/elite-gamez/elite-gamez.github.io/main/${game.image}" alt="${game.title}" />
          <h2>${game.title}</h2>
          <p>${game.description}</p>
        `;
        card.addEventListener('click', () => openGame(game));
        gameContainer.appendChild(card);
      });
      gameInfo.textContent = `Games: ${gamesData.length}`;
    }

    async function openGame(game) {
      const url = `https://rawcdn.githack.com/elite-gamez/elite-gamez.github.io/main/${game.url}`;
      gameFrame.src = url;
      document.getElementById('gameTitle').textContent = game.title;
      gameModal.style.display = 'flex';

      downloadBtn.onclick = async () => {
        try {
          const resp = await fetch(url);
          if (!resp.ok) throw new Error('Fetch failed');
          const blob = await resp.blob();
          const blobUrl = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = blobUrl;
          a.download = `${game.title}.html`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(blobUrl);
        } catch (e) {
          alert(`Download error: ${e.message}`);
        }
      };

      fullscreenBtn.onclick = () => {
        requestElementFullscreen(gameFrame);
      };

      blobBtn.onclick = () => {
        fetch(url)
          .then(r => r.text())
          .then(html => {
            const blob = new Blob([html], { type: 'text/html' });
            const blobUrl = URL.createObjectURL(blob);
            window.open(blobUrl, '_blank');
          })
          .catch(e => alert(`Blob error: ${e.message}`));
      };
    }

    loadGames();
    setInterval(loadGames, 30000);
  }

  function showMoviesTab() {
    updateLocation('/movies');
    mainContent.classList.remove('home');
    mainContent.innerHTML = `
      <h1>Fair Movies</h1>
      <div id="movieContainer" class="grid"></div>
      <div class="modal" id="movieModal">
        <div class="modal-content" id="movieModalContent">
          <button id="closeMovieModal" class="modal-close">&times;</button>
          <h2 id="movieTitle"></h2>
          <iframe id="movieFrame" frameborder="0"></iframe>
          <div class="controls">
            <button id="openSourceBtn">Open Source</button>
            <button id="movieFullscreenBtn">Fullscreen</button>
          </div>
        </div>
      </div>
    `;
    const movieContainer  = document.getElementById('movieContainer');
    const movieModal      = document.getElementById('movieModal');
    const movieModalContent = document.getElementById('movieModalContent');
    const movieFrame      = document.getElementById('movieFrame');
    const movieTitleElem  = document.getElementById('movieTitle');
    const closeMovieModal = document.getElementById('closeMovieModal');
    const openSourceBtn   = document.getElementById('openSourceBtn');
    const movieFullscreenBtn = document.getElementById('movieFullscreenBtn');

    closeMovieModal.addEventListener('click', () => {
      movieModal.style.display = 'none';
      movieFrame.src = '';
      exitActiveFullscreen();
    });

    function renderMovies() {
      movieContainer.innerHTML = '';
      movies.forEach(m => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.innerHTML = `
          <img src="${m.image}" alt="${m.name}" />
          <h2>${m.name}</h2>
        `;
        card.addEventListener('click', () => {
          let embedUrl = m.url;
          const driveMatch = /\/file\/d\/([^\/]+)\//.exec(m.url);
          if (driveMatch && driveMatch[1]) {
            const fileId = driveMatch[1];
            embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;
          }
          movieFrame.src = embedUrl;
          movieTitleElem.textContent = m.name;
          movieModal.style.display = 'flex';

          openSourceBtn.onclick = () => {
            window.open(m.url, '_blank');
          };

          movieFullscreenBtn.onclick = () => {
            // prefer fullscreen on the iframe element; fall back to modal container
            requestElementFullscreen(movieFrame).catch(() => {
              requestElementFullscreen(movieModalContent);
            });
          };
        });
        movieContainer.appendChild(card);
      });
    }

    renderMovies();
  }

  function showSettingsTab() {
    updateLocation('/settings');
    mainContent.classList.remove('home');
    mainContent.innerHTML = `
      <h1>Settings</h1>
      <section class="theme-picker">
        <h2>Pick a Theme</h2>
        ${themes.map(t =>
          `<label style="display:block;margin:6px 0;">
             <input type="radio" name="theme" value="${t}"
               ${t === savedTheme ? 'checked' : ''}>
             ${t.charAt(0).toUpperCase() + t.slice(1)}
           </label>`
        ).join('')}
      </section>
      <button id="aboutBlankSettings" class="nav-btn">Open About Blank</button>
      <section class="credits" style="margin-top:1rem;">
        <h2>Credits</h2>
        <ul>
          <li>Christian – Developer</li>
          <li>Hutchinsan – Every game</li>
        </ul>
        <h2>Contacts</h2>
        <ul>
          <li>Christian – Discord @ haze_vv</li>
          <li>Hutchinsan – GitHub https://github.com/elite-gamez/elite_gamez_games</li>
        </ul>
      </section>
    `;
    mainContent.querySelectorAll('input[name="theme"]').forEach(r => {
      r.addEventListener('change', () => applyTheme(r.value));
    });
    document.getElementById('aboutBlankSettings')
      .addEventListener('click', () => {
        const win = window.open('about:blank', '_blank');
        if (win) {
          win.document.write(`
            <iframe
              src="https://fair.playcode.io/"
              style="border:none;width:100vw;height:100vh;">
            </iframe>
          `);
          win.document.close();
        }
      });
  }

  function showMusicTab() {
    updateLocation('/music');
    mainContent.classList.remove('home');
    mainContent.innerHTML = `
      <h1>Music Player</h1>
      <iframe
        src="music!.html"
        style="width:100%; height:70vh; border:none; border-radius:8px;">
      </iframe>
    `;
  }

  // helper: request fullscreen on an element with vendor fallbacks
  function requestElementFullscreen(el) {
    return new Promise((resolve, reject) => {
      if (!el) return reject(new Error('No element'));
      const request = el.requestFullscreen || el.webkitRequestFullscreen || el.mozRequestFullScreen || el.msRequestFullscreen;
      if (request) {
        const onChange = () => {
          document.removeEventListener('fullscreenchange', onChange);
          document.removeEventListener('webkitfullscreenchange', onChange);
          resolve();
        };
        document.addEventListener('fullscreenchange', onChange);
        document.addEventListener('webkitfullscreenchange', onChange);
        try { request.call(el); }
        catch (e) { reject(e); }
      } else reject(new Error('Fullscreen API not supported'));
    });
  }

  // helper: exit fullscreen if active
  function exitActiveFullscreen() {
    const exit = document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen;
    if (exit && (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement)) {
      try { exit.call(document); } catch (e) {}
    }
  }

  // initialize
  showHome();
  openTab('Home');
});
