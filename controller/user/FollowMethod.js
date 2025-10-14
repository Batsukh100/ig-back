import { IgUsersModel } from "../../Schema/UserSchema.js";

export const FollowMethod = async (req, res) => {
  const user = req.user;
  const FollowedUserId = req.params.FollowedUserId;
  const FollowingUserId = user._id;

  if (FollowedUserId === FollowingUserId) {
    res.status(400).json({ message: "Araichdee chi" });
    return;
  }

  const followedUser = await IgUsersModel.findById(FollowedUserId);
  const followingUser = await IgUsersModel.findById(FollowingUserId);

  const one = followedUser.followers;
  const isFollowed = one.includes(FollowingUserId);

  if (isFollowed) {
    await IgUsersModel.findByIdAndUpdate(followingUser, {
      following: followingUser.following.filter(
        (item) => item.toString() !== FollowedUserId
      ),
    });
    await IgUsersModel.findByIdAndUpdate(followedUser, {
      followers: followedUser.followers.filter(
        (item) => item.toString() !== FollowingUserId
      ),
    });
    res.status(200).json({ message: " Unfollowed" });
  } else {
    await IgUsersModel.findByIdAndUpdate(followingUser, {
      following: [...followingUser.following, FollowedUserId],
    });
    await IgUsersModel.findByIdAndUpdate(followedUser, {
      followers: [...followedUser.followers, FollowingUserId],
    });
    res.status(200).json({ message: "Followed " });
  }
};
