class GetModifier {
  static enforceBasicAuth(acl) {
    return (req, res, next) => {
      if(!req.session || req.session.userType)
    };
  }
}
